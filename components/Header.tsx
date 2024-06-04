'use client'

import {
  OrganizationSwitcher,
  SignedOut,
  SignInButton,
  UserButton,
} from '@clerk/nextjs'
import { Button } from './ui/button'

export const Header = () => {
  return (
    <div className="border-b border-slate-500 py-4">
      <div className="container mx-auto flex items-center justify-between">
        File Drive
        <div className="flex gap-4">
          <OrganizationSwitcher />
          <UserButton />
          <SignedOut>
            <SignInButton>
              <Button>Sign In</Button>
            </SignInButton>
          </SignedOut>
        </div>
      </div>
    </div>
  )
}
