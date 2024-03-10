import { mutation, query } from "./_generated/server";
import { v } from "convex/values";
import { unstable_noStore as noStore } from "next/cache";
export const get = query({ 
    
    args:{
        orgId:v.string(),
        search:v.optional(v.string())
    },
    handler: async (ctx,args)=>{
        noStore();
        const identity = await ctx.auth.getUserIdentity();
        if(!identity)
        return;
    
        const title = args.search as string;
        
        let boards=[];

        if(title){
            boards = await ctx.db.query("boards").withSearchIndex("search_title", (q)=> q
            .search ("title",title)
            .eq("orgId",args.orgId)
            
            ).collect()

            return boards;
        }
        else{

        boards = await ctx.db.query("boards").withIndex("by_org", (q)=>q.eq("orgId",args.orgId))
        .order("desc")
        .collect();

            
        return boards;
        
        }
    }
})

