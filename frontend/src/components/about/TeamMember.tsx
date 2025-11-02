import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';

interface TeamMemberProps {
  name: string;
  role: string;
  bio: string;
}

export function TeamMember({ name, role, bio }: TeamMemberProps) {
  const initials = name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase();

  return (
    <Card className="border-2 hover:border-secondary transition-all duration-300 hover:shadow-lg h-full">
      <CardContent className="p-6 text-center flex flex-col h-full">
        <Avatar className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-secondary to-secondary/60">
          <AvatarFallback className="text-2xl font-bold text-primary">
            {initials}
          </AvatarFallback>
        </Avatar>
        <h3 className="text-xl font-bold text-foreground mb-1">{name}</h3>
        <p className="text-primary font-semibold mb-3">{role}</p>
        <p className="text-muted-foreground text-sm leading-relaxed flex-grow">{bio}</p>
      </CardContent>
    </Card>
  );
}
