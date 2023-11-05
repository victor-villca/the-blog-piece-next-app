import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider  from "next-auth/providers/credentials"
import connect from "@/utils/dbConnection"
import UserModel from "@/models/UserModel"
import bcrypt from "bcryptjs";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      id: "credentials",
      name : "Credentials",
      async authorize(credentials){
        await connect()

        try {
          const user = await UserModel.findOne({email: credentials.email});
          if (user){
            const isPasswordCorrect = await bcrypt.compare(
              credentials.password,
              user.password
            )
            console.log(user.password)
            console.log(credentials.password)
            if(isPasswordCorrect){
              return user
            }else{
              throw new Error("Wrong credentials")
            }
          }else{
            throw new Error("User not found")
          }
        
        } catch (error) {
          throw new Error(error)
        }
      }
    })
  ],
  pages:{
    error: "/dashboard/login"
  }
})

export {handler as GET, handler as POST}