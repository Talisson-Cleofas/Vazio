const crypto=require("crypto");
const PASSWORD_HASH=process.env.ADMIN_PASSWORD_HASH;
const SESSION_SECRET=process.env.SESSION_SECRET;
const attempts=globalThis.__tc_attempts||(globalThis.__tc_attempts=new Map());
function safeHexEqual(a,b){try{const A=Buffer.from(a,"hex"),B=Buffer.from(b,"hex");return A.length===B.length&&crypto.timingSafeEqual(A,B)}catch{return false}}
function clientIp(req){return String(req.headers["x-forwarded-for"]||req.socket?.remoteAddress||"unknown").split(",")[0].trim()}
function sign(v){return crypto.createHmac("sha256",SESSION_SECRET).update(v).digest("base64url")}
module.exports=async(req,res)=>{res.setHeader("Cache-Control","no-store");if(req.method!=="POST")return res.status(405).json({ok:false});if(!PASSWORD_HASH||!SESSION_SECRET)return res.status(503).json({ok:false});
const ip=clientIp(req),now=Date.now(),slot=attempts.get(ip)||{count:0,first:now,blockedUntil:0};if(slot.blockedUntil>now)return res.status(429).json({ok:false});if(now-slot.first>15*60*1000){slot.count=0;slot.first=now}
let body=req.body||{};if(typeof body==="string"){try{body=JSON.parse(body)}catch{body={}}}
const username=String(body.username||"").slice(0,32),password=String(body.password||"").slice(0,128);const candidate=crypto.createHash("sha256").update(password).digest("hex");const valid=username==="admin"&&safeHexEqual(candidate,PASSWORD_HASH);
if(!valid){slot.count++;if(slot.count>=5)slot.blockedUntil=now+15*60*1000;attempts.set(ip,slot);await new Promise(r=>setTimeout(r,700));return res.status(slot.blockedUntil>now?429:401).json({ok:false})}
attempts.delete(ip);const exp=String(now+8*60*60*1000),token=exp+"."+sign(exp);res.setHeader("Set-Cookie",`tc_session=${token}; HttpOnly; Secure; SameSite=Strict; Path=/; Max-Age=28800`);return res.status(200).json({ok:true})};