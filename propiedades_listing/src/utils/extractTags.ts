export const extractTags = (title: string): string[] => {
    const keywords = [
      "pileta", "cochera", "balcón", "patio", "terraza", "quincho", "estrenar",
      "amoblado", "equipado", "2 dorm", "3 dorm", "1 dorm", "dúplex", "asador",
      "garage", "seguridad", "balcon", "parrilla", "suite", "loft", "luminoso"
    ];
  
    const normalizedTitle = title.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  
    return keywords.filter((k) => normalizedTitle.includes(k));
  };