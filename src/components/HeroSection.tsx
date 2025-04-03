
import React from "react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1589923188900-85dae523342b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl text-white">
          <h1 className="heading-xl mb-6 animate-fade-in text-white">
            Soluções de <span className="text-grain-green-400">Engenharia</span> para o 
            Agronegócio do <span className="text-grain-blue-300">Futuro</span>
          </h1>
          <p className="text-xl mb-8 animate-fade-in text-gray-200">
            Especialistas em projetos de silos, armazenagem de grãos e sistemas logísticos 
            com tecnologia de ponta para maximizar sua produtividade.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button 
              size="lg" 
              className="bg-grain-blue-600 hover:bg-grain-blue-700 animate-fade-in"
              onClick={() => document.getElementById("servicos")?.scrollIntoView({behavior: "smooth"})}
            >
              Conheça Nossos Serviços
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-grain-blue-600 animate-fade-in"
              onClick={() => document.getElementById("contato")?.scrollIntoView({behavior: "smooth"})}
            >
              Entre em Contato
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
