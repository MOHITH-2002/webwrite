import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

const images = [
    "/random/1.svg",
    "/random/2.svg",
    "/random/3.svg",
    "/random/4.svg",
    "/random/5.svg",
    "/random/6.svg",
    "/random/7.svg",
    "/random/8.svg",
    "/random/9.svg",
    "/random/10.svg",
    "/random/11.svg",
    "/random/12.svg",
    "/random/13.svg",
    "/random/14.svg",
    "/random/15.svg",
    "/random/16.svg",
    "/random/17.svg",
    "/random/18.svg",
    "/random/19.svg",
    "/random/20.svg",
    "/random/21.svg",
    "/random/22.svg",
    "/random/23.svg",
    "/random/24.svg",
    "/random/25.svg",
]

const colors = [
  "bg-[#7476ED]/10",
  "bg-[#E56F8C]/10",
  "bg-[#0080ff]/10"
]

export const createBoard = mutation({
  args: {   
    orgId: v.string(),
 title: v.string(), },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    if(!identity){
         throw new Error("unauthorized user");
    }
    const randomImage = images[Math.floor(Math.random()*images.length)];
    const randomcolor = colors[Math.floor(Math.random()*colors.length)]
    const board = await ctx.db.insert("boards", {
        title: args.title,
        orgId:args.orgId,
        authorId:identity.subject,
        authorName:identity.name!,
        imageUrl:randomImage,
        bg_colors:randomcolor

        });

        return board;

  },
});


export const removeBoard = mutation({
  args: {
    id:v.id("boards")
  },
  handler: async (ctx,args)=>{
    const identity = await ctx.auth.getUserIdentity();
    if(!identity){
        throw new Error("unauthorized user");
    }
    await ctx.db.delete(args.id);
  }

})
export const updateBoard = mutation({
  args: {
    id:v.id("boards"),
    title:v.string(),
  },
  handler: async (ctx,args)=>{
    const identity = await ctx.auth.getUserIdentity();
    if(!identity){
        throw new Error("unauthorized user");
    }
    const title = args.title.trim();
    if(title.length===0){
      throw new Error("Title is required")
    }
    if(title.length>20){
       throw new Error("Title is must be less than 20 characters")
    }
    const board = await ctx.db.patch(args.id,{
      title:args.title
    });
    return board;
  }

})

export const get = query({
  args:{id:v.id("boards")},
  handler:async (ctx,args)=>{
    const board = await ctx.db.get(args.id);
    return board;
  }
})