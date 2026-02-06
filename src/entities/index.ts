/**
 * Auto-generated entity types
 * Contains all CMS collection interfaces in a single file 
 */

/**
 * Collection ID: certifications
 * Interface for Certifications
 */
export interface Certifications {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  certificationName?: string;
  /** @wixFieldType text */
  description?: string;
  /** @wixFieldType text */
  validationDetails?: string;
  /** @wixFieldType image - Contains image URL, render with <Image> component, NOT as text */
  logoImage?: string;
  /** @wixFieldType url */
  certificationUrl?: string;
}


/**
 * Collection ID: faqs
 * Interface for FrequentlyAskedQuestions
 */
export interface FrequentlyAskedQuestions {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  question?: string;
  /** @wixFieldType text */
  answer?: string;
  /** @wixFieldType text */
  category?: string;
  /** @wixFieldType number */
  sortOrder?: number;
  /** @wixFieldType boolean */
  isFeatured?: boolean;
}


/**
 * Collection ID: qualitystandards
 * Interface for QualityStandards
 */
export interface QualityStandards {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  standardTitle?: string;
  /** @wixFieldType text */
  shortSummary?: string;
  /** @wixFieldType text */
  description?: string;
  /** @wixFieldType image - Contains image URL, render with <Image> component, NOT as text */
  standardImage?: string;
  /** @wixFieldType url */
  learnMoreUrl?: string;
}


/**
 * Collection ID: recipes
 * Interface for Recipes
 */
export interface Recipes {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  recipeTitle?: string;
  /** @wixFieldType text */
  ingredientsList?: string;
  /** @wixFieldType text */
  preparationInstructions?: string;
  /** @wixFieldType text */
  featuredProduct?: string;
  /** @wixFieldType image - Contains image URL, render with <Image> component, NOT as text */
  recipeImage?: string;
}


/**
 * Collection ID: team
 * Interface for TeamMembers
 */
export interface TeamMembers {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  name?: string;
  /** @wixFieldType text */
  jobTitle?: string;
  /** @wixFieldType text */
  bio?: string;
  /** @wixFieldType image - Contains image URL, render with <Image> component, NOT as text */
  photo?: string;
  /** @wixFieldType url */
  linkedInProfile?: string;
}
