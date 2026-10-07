import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
export async function POST(req:Request){
 try {
  const body=await req.json(); if(!body.name||!body.email) return NextResponse.json({error:"Name and email required"},{status:400});
  const supabase=await createClient();
  const {error}=await supabase.from("leads").insert({name:body.name,email:body.email,phone:body.phone||null,service:body.service||null,message:body.message||null,status:"new"});
  if(error) return NextResponse.json({error:error.message},{status:500});
  return NextResponse.json({ok:true});
 } catch { return NextResponse.json({error:"Invalid request"},{status:400}); }
}