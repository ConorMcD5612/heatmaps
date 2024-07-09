'use client'
import FeatherIcon from "feather-icons-react";
import { useSession, signIn, signOut } from "next-auth/react";



export default function LoginBtn() {
    const {data: session} = useSession()

    if(session) {
        return(
            <>
             <button onClick={() => signOut()} >
             <FeatherIcon icon="log-out"  />
        </button>
            </>
        )
    }
    return( 
        <>
         <button onClick={() => signIn()} >
              <FeatherIcon icon="log-in"  />
        </button>
        </>
    )
}