# Claude Artifact Local

A streamlined development environment for testing and exploring Claude's React artifacts locally. This project provides a zero-config setup for quickly testing React components generated by Claude, complete with pre-configured dependencies commonly used in Claude's artifacts.

## 🚀 Quick Start

1. Clone the repository
```bash
git clone https://github.com/yourusername/claude-artifact-local.git
cd claude-artifact-local
```

2. Install dependencies
```bash
pnpm install
```

3. Start the development server
```bash
pnpm dev
```

## 📖 Usage

### Testing Claude Artifacts

1. Create a new file under `src/pages/`
```tsx
// src/pages/welcome.tsx
import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Boxes } from 'lucide-react'

const Welcome = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center p-4">
      <Card className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10" />
        <CardContent className="relative p-8 text-center space-y-6">
          <div className="flex justify-center">
            <div className="p-3 bg-blue-500/10 rounded-xl">
              <Boxes className="w-12 h-12 text-blue-500" />
            </div>
          </div>
          
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
              Testing Claude Artifacts
            </h1>
            <p className="mt-2 text-gray-500">
              Build and test components in seconds
            </p>
          </div>

          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <span>Just create a new file under pages</span>
            <ArrowRight className="w-4 h-4" />
            <code className="px-2 py-1 bg-muted rounded-md">
              src/pages/
            </code>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Welcome

// meta is optional
export const meta = {
  title: 'Welcome'
}
```

2. That's it! Your component is now available at `/Button`

### Features

- 🔌 **Plug and Play**: No setup required - just create a file and start coding
- 📦 **Pre-installed Dependencies**: Common packages used by Claude are already set up:
  - Basic shadcn/ui components (Card, Button)
  - `lucide-react` icons
  - `tailwindcss` for styling
- 🛠️ **Developer Experience**:
  - File-based routing
  - Full screen toggle
  - Easy navigation
  - Hot reloading

### Page Configuration

Each page can optionally export a `meta` object with the following options:

```typescript
export const meta = {
  title?: string;     // Navigation title (optional, defaults to filename)
  fullScreen?: boolean; // Remove header/navigation (optional, defaults to false)
}
```

## 📁 Project Structure

```
src/
├── pages/           # Add your components here
│   ├── index.tsx    # Home page
│   └── [...].tsx    # Your components
├── app.tsx          # Router configuration
└── main.tsx        # Entry point
```

## 🧩 Pre-installed Components and Libraries

### UI Components (shadcn/ui)
Basic components are pre-installed:
```tsx
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
```

To add more shadcn components as needed:
```bash
pnpm dlx shadcn-ui@latest add input
pnpm dlx shadcn-ui@latest add dialog
# etc...
```

### Icons (lucide-react)
```tsx
import { Home, Menu, Search } from 'lucide-react'
```

### Styling
```tsx
// Use Tailwind classes directly
<div className="flex items-center justify-between p-4 space-y-2">
```

## 🚀 Best Practices

1. **File Naming**:
   - Use kebab-case for file names (e.g., `button.tsx`, `data-table.tsx`)
   - Add related components in a folder structure (e.g., `TodoList/index.tsx`)

2. **Metadata**:
   - Meta object is optional
   - If not provided, filename will be used as title
   - Use fullScreen for immersive experiences

3. **Adding Components**:
   - Start with existing Card and Button components
   - Add more shadcn/ui components only as needed using the CLI
   - Keep the project lean by installing only what you use

## 🤝 Contributing

Feel free to contribute by:
1. Forking the repository
2. Creating your feature branch
3. Committing your changes
4. Opening a pull request

Note: Please avoid adding new shadcn/ui components to the base installation. Users should add these as needed for their specific use cases.

## 📝 License

MIT

---

Built with ❤️ for the Claude community