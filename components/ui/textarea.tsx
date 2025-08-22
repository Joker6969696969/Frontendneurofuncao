import * as React from "react"

import { cn } from "@/lib/utils"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      style={{ whiteSpace: "pre-wrap", wordBreak: "break-word" }} // ✅ force wrap
      className="w-full min-h-16 border px-3 py-2"
      {...props}
    />
  )
}


export { Textarea }
