import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github } from 'lucide-react'

const Index = () => {
  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <Card>
        <CardHeader>
          <CardTitle>Welcome to Claude Artifact Local</CardTitle>
          <CardDescription>
            A zero-config environment for testing Claude's React artifacts
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            Simply create new components under <code className="bg-muted px-1 py-0.5 rounded">src/pages/</code> and they'll be automatically available as routes.
          </p>
          <div className="flex gap-4">
            <Button>
              <Github className="mr-2 h-4 w-4" />
              View on GitHub
            </Button>
            {/* <Button variant="outline">
              Read Docs
            </Button> */}
          </div>
        </CardContent>
      </Card>

      {/* Quick Start */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Start</CardTitle>
          <CardDescription>
            Here's how to add your first component
          </CardDescription>
        </CardHeader>
        <CardContent>
          <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
{`// src/pages/Button.tsx
import React from 'react'
import { Button } from "@/components/ui/button"

const ButtonDemo = () => {
  return (
    <Button>Click me!</Button>
  )
}

export default ButtonDemo

// meta is optional
export const meta = {
  title: 'Button Demo'
}`}
          </pre>
        </CardContent>
      </Card>

      {/* Features */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Pre-installed UI</CardTitle>
            <CardDescription>
              shadcn/ui components ready to use
            </CardDescription>
          </CardHeader>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Icons Included</CardTitle>
            <CardDescription>
              lucide-react icons pre-configured
            </CardDescription>
          </CardHeader>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>File-based Routing</CardTitle>
            <CardDescription>
              Automatic route generation
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    </div>
  )
}

export default Index

export const meta = {
  title: 'Home'
}