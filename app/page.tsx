'use client'

import { Button } from '@/components/ui/button'
import { api } from '@/convex/_generated/api'
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
  useSession,
} from '@clerk/nextjs'
import { useMutation, useQuery } from 'convex/react'

export default function Home() {
  const createFile = useMutation(api.files.createFile)
  const files = useQuery(api.files.getFiles)
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <SignedIn>
        <SignOutButton>
          <Button className="mb-10">Sign Out</Button>
        </SignOutButton>
      </SignedIn>
      <SignedOut>
        <SignInButton mode="modal">
          <Button className="mb-10">Sign In</Button>
        </SignInButton>
      </SignedOut>

      <h1 className="text-4xl font-semibold text-primary">Doctor app</h1>
      <Button
        className="m-10"
        onClick={() => {
          createFile({ name: 'Hello World!' })
        }}
      >
        Click Me
      </Button>

      {files?.map((file) => {
        return <div key={file._id}>{file.name}</div>
      })}
    </main>
  )
}
