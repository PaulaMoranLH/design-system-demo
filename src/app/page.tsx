import { Button } from '@/components/ui/Button';
import { SecondaryButton } from '@/components/ui/SecondaryButton';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen p-24">
      <div className="space-y-8">
        <h1 className="text-4xl font-bold">Design System Demo</h1>
        
        <div className="space-y-[30px]">
          <div className="flex flex-col gap-[30px]">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-700">Primary Button</label>
              <div style={{ height: '20px' }} />
              <Button icon={
                <Image 
                  src="/query-icon.svg" 
                  alt="query" 
                  width={16}
                  height={16}
                  style={{ width: '16px', height: '16px' }}
                />
              }>Query files</Button>
              <div style={{ height: '20px' }} />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-700">Secondary Button</label>
              <div style={{ height: '20px' }} />
              <SecondaryButton>Open case</SecondaryButton>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}