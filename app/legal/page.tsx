"use client"

import { useState, useEffect, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import CGUContent from "@/components/legal/CGUContent"
import CGVContent from "@/components/legal/CGVContent"
import PrivacyContent from "@/components/legal/PrivacyContent"
import MentionsContent from "@/components/legal/MentionsContent"

const tabs = ["CGU", "CGV", "Politique de confidentialité", "Mentions légales"] as const
type Tab = typeof tabs[number]

function LegalPageContent() {
  const searchParams = useSearchParams()
  const [activeTab, setActiveTab] = useState<Tab>("CGU")

  useEffect(() => {
    const tab = searchParams.get("tab") as Tab
    if (tab && tabs.includes(tab)) {
      setActiveTab(tab)
    }
  }, [searchParams])

  return (
    <main className="bg-[#f5f5f8] min-h-screen flex justify-center items-start pt-18 pb-16 px-4">
      <div className="bg-white rounded-2xl shadow-sm w-full max-w-3xl p-10">

        <div className="flex gap-1 bg-[#f5f5f8] rounded-xl p-1 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 text-xs py-2 px-2 rounded-lg transition-all font-medium ${
                activeTab === tab
                  ? "bg-white text-[#984B4B] shadow-sm"
                  : "text-gray-500 hover:text-gray-800"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {activeTab === "CGU" && <CGUContent />}
        {activeTab === "CGV" && <CGVContent />}
        {activeTab === "Politique de confidentialité" && <PrivacyContent />}
        {activeTab === "Mentions légales" && <MentionsContent />}

      </div>
    </main>
  )
}

export default function LegalPage() {
  return (
    <Suspense fallback={<main className="flex-1 bg-[#f5f5f8]" />}>
      <LegalPageContent />
    </Suspense>
  )
}