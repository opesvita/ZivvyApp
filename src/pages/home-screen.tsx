import { Container } from '../components/ui-pro';
import { Button } from "@/components/base/buttons/button";

export const HomeScreen = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <Container size="desktop">
                <div className="py-8">
                    <h1 className="text-3xl font-bold mb-6">Your 4px Grid System Test</h1>
                    
                    <div className="space-y-4">
                        <p className="text-lg">Container with desktop margins (48px)</p>
                        
                        <div 
                            className="bg-blue-100 p-4 rounded"
                            style={{ margin: 'var(--spacing-m)' }}
                        >
                            Using 16px spacing (4px × 4)
                        </div>
                        
                        <div 
                            className="bg-green-100 p-4 rounded"
                            style={{ padding: 'var(--spacing-l)' }}
                        >
                            Using 24px padding (4px × 6)
                        </div>
                        
                        <div className="flex gap-4 mt-8">
                            <Button color="primary" size="lg">
                                Test Button with Grid
                            </Button>
                            
                            <Button color="secondary" size="lg">
                                Spacing Test
                            </Button>
                        </div>
                        
                        <div className="mt-8 p-6 bg-yellow-100 border border-yellow-300 rounded-lg">
                            <p className="text-center">
                                ✅ Your 4px Grid System + Untitled UI Container is working!
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};