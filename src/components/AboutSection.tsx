import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Target, Lightbulb, Users } from 'lucide-react'

export const AboutSection = () => {
  const values = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Precision",
      description: "Every product is crafted with meticulous attention to detail and engineering excellence."
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Innovation",
      description: "We push the boundaries of what's possible with cutting-edge technology and design."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Community",
      description: "Building products that bring people together and enhance their daily experiences."
    }
  ]

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8 animate-slide-in-left">
            <div className="space-y-4">
              <Badge variant="outline" className="border-accent/50 text-accent">
                Our Story
              </Badge>
              <h2 className="text-5xl lg:text-6xl font-extralight tracking-tight">
                Crafting the <span className="gradient-primary bg-clip-text text-transparent">Future</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Born from a vision to revolutionize the vaping industry, INFLAVE represents 
                the perfect fusion of cutting-edge technology and elegant design.
              </p>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Founded in 2020 by a team of passionate engineers and designers, we've dedicated 
                ourselves to creating products that don't just meet expectations—they exceed them. 
                Our commitment to quality, innovation, and user experience drives everything we do.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                From our state-of-the-art manufacturing facilities to our world-class R&D labs, 
                every aspect of our operation is focused on delivering premium experiences that 
                our customers love and trust.
              </p>
            </div>

            <Button 
              size="lg"
              className="gradient-primary glow-primary hover:scale-105 transition-spring text-lg px-8 py-6"
            >
              Learn More About Us
            </Button>
          </div>

          {/* Values Cards */}
          <div className="space-y-6 animate-slide-in-right">
            {values.map((value, index) => (
              <Card key={index} className="bento-card p-6 hover:glow-accent group" style={{
                animationDelay: `${index * 200}ms`
              }}>
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-accent/20 text-accent rounded-2xl group-hover:animate-glow">
                    {value.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-medium mb-3">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
            
            {/* Statistics Card */}
            <Card className="bento-card p-6 gradient-secondary border-primary/20 animate-fade-in">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-3xl font-extralight gradient-primary bg-clip-text text-transparent">
                    4+
                  </div>
                  <div className="text-sm text-muted-foreground">Years Innovation</div>
                </div>
                <div>
                  <div className="text-3xl font-extralight gradient-primary bg-clip-text text-transparent">
                    50+
                  </div>
                  <div className="text-sm text-muted-foreground">Team Members</div>
                </div>
                <div>
                  <div className="text-3xl font-extralight gradient-primary bg-clip-text text-transparent">
                    25+
                  </div>
                  <div className="text-sm text-muted-foreground">Patents Filed</div>
                </div>
                <div>
                  <div className="text-3xl font-extralight gradient-primary bg-clip-text text-transparent">
                    15+
                  </div>
                  <div className="text-sm text-muted-foreground">Awards Won</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}