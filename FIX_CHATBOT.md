# Fix Chatbot Error

## Issue
The error shows: `Module not found: Can't resolve 'ai/react'`

## Solution

I've added the required packages to `package.json`. Now you need to:

### 1. Install the new packages

```bash
# Make sure NVM is loaded
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
nvm use 18.20.8

# Install dependencies
npm install
```

### 2. Set up OpenAI API (Optional - for actual AI responses)

The chatbot is set up but needs an API key for real responses. You have two options:

#### Option A: Use OpenAI (Recommended)

1. Get an API key from [OpenAI](https://platform.openai.com/api-keys)
2. Create `.env.local` file:
```bash
OPENAI_API_KEY=your_api_key_here
```

#### Option B: Use Mock Responses (For Testing)

Edit `app/api/chat/route.ts` and replace with a simple mock:

```typescript
export async function POST(req: NextRequest) {
  const { messages } = await req.json();
  const lastMessage = messages[messages.length - 1]?.content || '';
  
  // Simple mock response
  return new Response(
    JSON.stringify({
      choices: [{
        message: {
          content: `You asked: "${lastMessage}". This is a mock response. Set up OpenAI API key for real responses.`
        }
      }]
    }),
    { headers: { 'Content-Type': 'application/json' } }
  );
}
```

### 3. Add Chatbot to Your Page

If you want to use the chatbot, add it to your `HomePage.tsx`:

```tsx
import Chatbot from '@/src/components/ui/Chatbot';

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-[#0F0F0F] text-white">
      <Navigation />
      <HeroSection />
      <ProjectsSection />
      <AboutSection />
      <ContactSection />
      <Chatbot /> {/* Add this */}
    </main>
  );
}
```

### 4. Restart Dev Server

After installing packages:

```bash
npm run dev
```

The error should be resolved!

## Note

The chatbot component is ready but needs:
- OpenAI API key for real AI responses, OR
- A custom API endpoint with your preferred AI service

The system prompt is already configured in the API route based on your portfolio bot specification.
