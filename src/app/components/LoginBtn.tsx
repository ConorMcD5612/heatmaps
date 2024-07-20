'use client'
import FeatherIcon from "feather-icons-react";
import { useSession, signIn, signOut } from "next-auth/react";



export default function LoginBtn() {
    const {data: session} = useSession()
    console.log(session)
    if(session) {
        return(
            <>
             <button onClick={() => signOut()} >
             <FeatherIcon size={30} icon="log-out"  />
        </button>
            </>
        )
    }
    return( 
        <>
         <button onClick={() => signIn()} >
              <FeatherIcon size={30} icon="log-in"  />
        </button>
        </>
    )
}