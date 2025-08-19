import beachBackground from '@/assets/beach-background.jpg';

export const Header = () => {
  return (
    <header className="relative h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
            style={{ backgroundImage: `url(${beachBackground})` }}>
      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-overlay"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 animate-fade-in">
        <h1 className="font-great-vibes text-6xl md:text-7xl text-white mb-4 drop-shadow-lg">
          Keenan weds Gloria
        </h1>
        <p className="font-playfair text-xl md:text-2xl text-white/90 tracking-wider">
          25.10.25
        </p>
      </div>
      
      {/* Decorative wave at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-background to-transparent"></div>
    </header>
  );
};