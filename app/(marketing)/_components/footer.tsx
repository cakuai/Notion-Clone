import { Logo } from "./logo"
import { Button } from "@/components/ui/button"

export const Footer = ()=>{
    return (
        <div className="flex items-center w-full p-6 bg-background z-50">
            <Logo></Logo>
            <div className="md:ml-auto w-full justify-between
            md:justify-end flex items-center gap-x-2
            text-muted-foreground">
                <Button variant="ghost" size="sm">
                    Private Policy
                </Button>
                <Button variant="ghost" size="sm"> 
                    Terms & Policy
                </Button>
            </div>
        </div>
    )
}

// variant 是組件的視覺風格 有outline、solid、ghost