"use client"

import { useState } from "react"
import { HoveredLink, Menu, MenuItem } from "@/components/ui/navbar-menu"

export default function Page() {
  const [active, setActive] = useState<string | null>(null)

  return (
    <>
      <main className="relative min-h-[900px] h-screen w-screen bg-[#17BEBB]">
        <div className="relative h-full w-[1368px] overflow-hidden bg-[#2E2B2A]">
          <img
            src="/linescape.jfif"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
        <div className="absolute top-8 left-1/2 -translate-x-1/2">
          <Menu setActive={setActive}>
            <MenuItem setActive={setActive} active={active} item="Products">
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="#design">Design tools</HoveredLink>
                <HoveredLink href="#analytics">Analytics</HoveredLink>
                <HoveredLink href="#integrations">Integrations</HoveredLink>
              </div>
            </MenuItem>
            <MenuItem setActive={setActive} active={active} item="Company">
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="#about">About us</HoveredLink>
                <HoveredLink href="#contact">Contact</HoveredLink>
                <HoveredLink href="#careers">Careers</HoveredLink>
              </div>
            </MenuItem>
            <MenuItem setActive={setActive} active={active} item="Resources">
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="#guides">Guides</HoveredLink>
                <HoveredLink href="#support">Support</HoveredLink>
              </div>
            </MenuItem>
          </Menu>
        </div>
      </main>
      
      <main className="min-h-[900px] h-screen w-screen bg-[#17BEBB]">
        <div className="h-full w-[1368px] bg-[#2E2B2A]" />
      </main>
      
      <main className="min-h-[900px] h-screen w-screen bg-[#17BEBB]">
        <div className="h-full w-[1368px] bg-[#2E2B2A]" />
      </main>
      <section className="h-[600px] w-screen bg-[#CD5334]">
        <div className="h-full w-[1368px] bg-[#2E2B2A]" />
      </section>
      
      <section className="h-[600px] w-screen bg-[#CD5334]">
        <div className="h-full w-[1368px] bg-[#2E2B2A]" />
      </section>
      <main className="min-h-[900px] h-screen w-screen bg-[#17BEBB]">
        <div className="h-full w-[1368px] bg-[#2E2B2A]" />
      </main>
      <section className="h-[600px] w-screen bg-[#CD5334]">
        <div className="h-full w-[1368px] bg-[#050401]" />
      </section>
      <main className="min-h-[900px] h-screen w-screen bg-[#17BEBB]">
        <div className="h-full w-[1368px] bg-[#2E2B2A]" />
      </main>
      <section className="h-[600px] w-screen bg-[#CD5334]">
        <div className="h-full w-[1368px] bg-[#FC5130]" />
      </section>
      <main className="min-h-[900px] h-screen w-screen bg-[#17BEBB]">
        <div className="h-full w-[1368px] bg-[#2E2B2A]" />
      </main>
      <section className="h-[600px] w-screen bg-[#CD5334]">
        <div className="h-full w-[1368px] bg-[#30BCED]" />
      </section>
      <main className="min-h-[900px] h-screen w-screen bg-[#17BEBB]">
        <div className="h-full w-[1368px] bg-[#2E2B2A]" />
      </main>
      <section className="h-[600px] w-screen bg-[#CD5334]">
        <div className="h-full w-[1368px] bg-[#FFFAFF]" />
      </section>
    </>
  )
}
