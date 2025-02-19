// import NextAuth from "next-auth";
// import GoogleProvider from "next-auth/providers/google";
// import { db } from "../db/db";
// import { users } from "../db/schema";

// export const authOptions = {
//   // Configure one or more authentication providers
//   providers: [
//     GoogleProvider({
//       clientId: "SHA256:n6LsJuEHxAeX3DXqiXjWVrYQpXAtMTqucrbxyr4Jmzc=",
//       clientSecret: "Thiscanbeanythinf",
//       async profile(profile, token) {
//         const data = {
//           fname: profile.given_name,
//           lname: profile.family_name,
//           email: profile.email,
//           provider: "google",
//           externalId: profile.sub,
//           image: profile.picture,
//         };

//         try {
//           const user = await db
//             .insert(users)
//             .values(data)
//             .onConflictDoUpdate({ target: users.email, set: data })
//             .returning();

//           return {
//             ...data,
//             name: data.fname,
//             id: String(user[0].id),
//             role: user[0].role,
//           };
//         } catch (error) {
//           console.log(error);
//           return {
//             id: "",
//           };
//         }
//         return { id: profile.id };
//       },
//     }),
//     // ...add more providers here
//   ],
//   callbacks: {
//     session(data){
//         return data;
//     },
//     jwt({token, user}){
//         if(user){
//             token.role = user.role;
//             token.id = user.id
//         }
//         return token
//     }
//   }
// };

// export default NextAuth(authOptions);
