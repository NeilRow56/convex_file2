'use client'

import { Button } from '@/components/ui/button'
import { api } from '@/convex/_generated/api'
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
  useOrganization,
  useSession,
  useUser,
} from '@clerk/nextjs'
import { useMutation, useQuery } from 'convex/react'

export default function Home() {
  const organization = useOrganization()
  const user = useUser()

  let orgId: string | undefined

  if (organization.isLoaded && user.isLoaded) {
    orgId = organization.organization?.id ?? user.user?.id
  }
  const createFile = useMutation(api.files.createFile)
  const files = useQuery(api.files.getFiles, orgId ? { orgId } : 'skip')
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-4xl font-semibold text-primary">File Drive</h1>
      <Button
        className="m-10"
        onClick={() => {
          if (!orgId) return
          createFile({ name: 'Hello World!', orgId })
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
