"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Code } from "lucide-react";

export default function HeroSection04() {
  return (
    <section className="w-full py-24 bg-background text-foreground">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT SIDE: Marketing Copy */}
        <div className="space-y-6">
          <Badge variant="secondary" className="px-3 py-1 text-sm">
            ⚡ Built with ShadCN UI
          </Badge>

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
            Focus on product,<br /> not pixels.
          </h1>

          <p className="text-muted-foreground text-lg max-w-xl">
            Use ready-made, accessible components to speed up development while keeping a beautiful, consistent UI across your app.
          </p>

          <div className="flex gap-4 flex-wrap">
            <Button size="lg">Try Now</Button>
            <Button variant="outline" size="lg">View Docs</Button>
          </div>

          <div className="flex items-center gap-3 mt-6">
            <Avatar className="w-8 h-8">
              <AvatarImage src="https://i.pravatar.cc/300?img=7" />
              <AvatarFallback>SC</AvatarFallback>
            </Avatar>
            <Avatar className="w-8 h-8">
              <AvatarImage src="https://i.pravatar.cc/300?img=8" />
              <AvatarFallback>AA</AvatarFallback>
            </Avatar>
            <span className="text-sm text-muted-foreground ml-2">
              Trusted by 12,000+ engineers
            </span>
          </div>
        </div>

        {/* RIGHT SIDE: Interactive Preview */}
        <Card className="shadow-sm border bg-muted/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-base flex items-center gap-2 text-muted-foreground">
              <Code className="w-4 h-4" />
              <span className="text-sm">components/button.tsx</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <Tabs defaultValue="preview" className="w-full">
              <TabsList className="grid grid-cols-2 w-full">
                <TabsTrigger value="preview">Preview</TabsTrigger>
                <TabsTrigger value="code">Code</TabsTrigger>
              </TabsList>
              <TabsContent value="preview" className="p-6 flex justify-center items-center min-h-[120px]">
                <Button variant="default">Click Me</Button>
              </TabsContent>
              <TabsContent value="code" className="p-6 font-mono text-sm bg-background rounded-b-md whitespace-pre-wrap">
{`<Button variant="default">
  Click Me
</Button>`}
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
