import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, ChefHat } from 'lucide-react';
import { BaseCrudService } from '@/integrations';
import { Recipes } from '@/entities';
import { Image } from '@/components/ui/image';
import { LoadingSpinner } from '@/components/ui/loading-spinner';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function RecipeDetailPage() {
  const { id } = useParams<{ id: string }>();
  const [recipe, setRecipe] = useState<Recipes | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadRecipe();
  }, [id]);

  const loadRecipe = async () => {
    if (!id) return;
    try {
      setIsLoading(true);
      const data = await BaseCrudService.getById<Recipes>('recipes', id);
      setRecipe(data);
    } catch (error) {
      console.error('Failed to load recipe:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="w-full py-20">
        <div className="max-w-[100rem] mx-auto px-6 md:px-12 lg:px-20">
          <Link
            to="/recipes"
            className="inline-flex items-center gap-2 text-secondary font-paragraph text-sm mb-12 hover:gap-3 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Recipes
          </Link>

          <div className="min-h-[600px]">
            {isLoading ? (
              <div className="flex justify-center items-center py-20">
                <LoadingSpinner />
              </div>
            ) : !recipe ? (
              <div className="text-center py-20">
                <h2 className="font-heading text-3xl text-foreground mb-4">Recipe Not Found</h2>
                <p className="font-paragraph text-base text-foreground/60">
                  The recipe you're looking for doesn't exist.
                </p>
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
                  {/* Image */}
                  <div className="relative h-[500px] rounded-lg overflow-hidden">
                    <Image
                      src={recipe.recipeImage || 'https://static.wixstatic.com/media/59e798_dd09ef84ef184dc99dc9dd2d70da0f46~mv2.png?originWidth=768&originHeight=448'}
                      alt={recipe.recipeTitle || 'Recipe'}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Info */}
                  <div>
                    <h1 className="font-heading text-4xl md:text-5xl text-foreground mb-6">
                      {recipe.recipeTitle}
                    </h1>

                    <div className="flex flex-wrap gap-6 mb-8">
                      <div className="flex items-center gap-2 text-foreground/60">
                        <Clock className="w-5 h-5" />
                        <span className="font-paragraph text-base">Quick & Easy</span>
                      </div>
                      {recipe.featuredProduct && (
                        <div className="flex items-center gap-2 text-emerald-accent">
                          <ChefHat className="w-5 h-5" />
                          <span className="font-paragraph text-base">
                            Features {recipe.featuredProduct}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Ingredients */}
                    {recipe.ingredientsList && (
                      <div className="mb-8">
                        <h2 className="font-heading text-2xl text-foreground mb-4">
                          Ingredients
                        </h2>
                        <div className="bg-foreground/5 rounded-lg p-6">
                          <p className="font-paragraph text-base text-foreground/80 whitespace-pre-line leading-relaxed">
                            {recipe.ingredientsList}
                          </p>
                        </div>
                      </div>
                    )}

                    {recipe.featuredProduct && (
                      <Link
                        to="/store"
                        className="inline-flex items-center gap-2 px-8 py-3 bg-secondary text-secondary-foreground font-paragraph text-base rounded-lg hover:bg-secondary/90 transition-colors"
                      >
                        Shop {recipe.featuredProduct}
                      </Link>
                    )}
                  </div>
                </div>

                {/* Instructions */}
                {recipe.preparationInstructions && (
                  <div className="max-w-[48rem]">
                    <h2 className="font-heading text-3xl text-foreground mb-8">
                      Preparation Instructions
                    </h2>
                    <div className="prose prose-lg max-w-none">
                      <p className="font-paragraph text-base text-foreground/80 whitespace-pre-line leading-relaxed">
                        {recipe.preparationInstructions}
                      </p>
                    </div>
                  </div>
                )}
              </motion.div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
