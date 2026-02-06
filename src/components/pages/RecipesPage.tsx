import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, ChefHat } from 'lucide-react';
import { BaseCrudService } from '@/integrations';
import { Recipes } from '@/entities';
import { Image } from '@/components/ui/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function RecipesPage() {
  const [recipes, setRecipes] = useState<Recipes[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  useEffect(() => {
    loadRecipes();
  }, []);

  const loadRecipes = async () => {
    try {
      setIsLoading(true);
      const result = await BaseCrudService.getAll<Recipes>('recipes');
      setRecipes(result.items);
    } catch (error) {
      console.error('Failed to load recipes:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const filteredRecipes = selectedFilter === 'all' 
    ? recipes 
    : recipes.filter(recipe => recipe.featuredProduct?.toLowerCase().includes(selectedFilter.toLowerCase()));

  const filters = [
    { label: 'All Recipes', value: 'all' },
    { label: 'Smoothies', value: 'smoothie' },
    { label: 'Baking', value: 'baking' },
    { label: 'Beverages', value: 'beverage' },
    { label: 'Wellness', value: 'wellness' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="w-full bg-emerald-accent py-24">
        <div className="max-w-[100rem] mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-[48rem] mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-heading text-5xl md:text-6xl text-primary-foreground mb-6"
            >
              Nourishing Recipes
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-paragraph text-lg text-primary-foreground/90 leading-relaxed"
            >
              Discover delicious ways to incorporate our premium powders into your daily routine.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="w-full border-b border-foreground/10">
        <div className="max-w-[100rem] mx-auto px-6 md:px-12 lg:px-20 py-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {filters.map((filter) => (
              <button
                key={filter.value}
                onClick={() => setSelectedFilter(filter.value)}
                className={`px-6 py-2.5 rounded-lg font-paragraph text-sm transition-colors ${
                  selectedFilter === filter.value
                    ? 'bg-secondary text-secondary-foreground'
                    : 'bg-background border border-foreground/20 text-foreground hover:border-secondary'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Recipes Grid */}
      <section className="w-full py-20">
        <div className="max-w-[100rem] mx-auto px-6 md:px-12 lg:px-20">
          <div className="min-h-[600px]">
            {isLoading ? null : filteredRecipes.length > 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
              >
                {filteredRecipes.map((recipe, index) => (
                  <motion.div
                    key={recipe._id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Link
                      to={`/recipes/${recipe._id}`}
                      className="group block bg-background rounded-lg overflow-hidden border border-foreground/10 hover:border-secondary transition-colors"
                    >
                      <div className="relative h-64 overflow-hidden">
                        <Image
                          src={recipe.recipeImage || 'https://static.wixstatic.com/media/59e798_927a6f69da4542808055281a33a8b70f~mv2.png?originWidth=384&originHeight=256'}
                          alt={recipe.recipeTitle || 'Recipe'}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="font-heading text-2xl text-foreground mb-3 group-hover:text-secondary transition-colors">
                          {recipe.recipeTitle}
                        </h3>
                        {recipe.featuredProduct && (
                          <div className="flex items-center gap-2 text-emerald-accent mb-3">
                            <ChefHat className="w-4 h-4" />
                            <span className="font-paragraph text-sm">
                              Features {recipe.featuredProduct}
                            </span>
                          </div>
                        )}
                        <div className="flex items-center gap-2 text-foreground/60">
                          <Clock className="w-4 h-4" />
                          <span className="font-paragraph text-sm">Quick & Easy</span>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <div className="text-center py-20">
                <p className="font-paragraph text-lg text-foreground/60">
                  No recipes found for this category.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
