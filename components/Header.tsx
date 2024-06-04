'use client'

import { OrganizationSwitcher, UserButton } from '@clerk/nextjs'

export const Header = () => {
  return (
    <div className="border-b border-slate-500 py-4">
      <div className="container mx-auto flex items-center justify-between">
        File Drive
        <div className="flex gap-4">
          <OrganizationSwitcher />
          <UserButton />
        </div>
      </div>
    </div>
  )
}
