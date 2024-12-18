import { useEffect, useState } from "react";
import usePostData from "../customHooks/usePostData"
const AddRecipe = () => {
    const { data, error, loading, success, postData } = usePostData("/api/data");

    //define state for managing whole recipe data 
    const [recipeData, setRecipeData] = useState(
        {
            recipeTitle: "",
            description: "",
            ingredients: [""],
            instructions: [{ stepNumber: 1, text: "" }],
            prepTime: "",
            cookTime: "",
            images: [],
            recipeVideo: "",
        }
    )

    // define states & functions for appending dynamic ingredients input field and track input value
    const [ingredientField, setIngredientField] = useState([
        {
            id: Date.now(),
            value: "",
        },
    ])
    function addDynamicIngredientInputField() {
        // console.log("new input field created")
        setIngredientField((currInputField) => ([...currInputField, { id: Date.now(), value: "" }]))
    }

    function handleIngredientsInputChange(id, newValue) {
        // console.log("value changed")
        const updateIngredientInputField = ingredientField.map((inputs) => (
            inputs.id === id ? { ...inputs, value: newValue } : inputs
        ))
        setIngredientField(updateIngredientInputField);
    }

    // define states & functions for appending dynamic instructions input field and track input value
    const [instructionField, setInstructionField] = useState([
        {
            id: Date.now(),
            value: "",
        }
    ])

    function handleInstructionInputChange(id, newValue) {
        const updateInstructionField = instructionField.map((currInstructions) => currInstructions.id === id ? ({ ...currInstructions, value: newValue }) : currInstructions)
        setInstructionField(updateInstructionField)
    }

    function addDynamicInstructionField() {
        setInstructionField((currInstructionField) => ([...currInstructionField, { id: Date.now(), value: "" }]))
        // console.log("instruction created !!!");
    }

    function handleInputChange(e) {
        // console.log(typeof(e.target.files[0].name));
        // console.log(e.target.files[0].name)
        const { type, name, value, files } = e.target;
        // console.log({ type, name, value, file })
        if (type === "text" || type === "textarea") {
            setRecipeData((currRecipeData) => ({ ...currRecipeData, [name]: value }));
        }

        if (type === "file") {
            //if user send videos
            if (name === "recipeVideo") {
                const videofile = files[0]
                // console.log("video file name ", videofile)
                setRecipeData((currRecipeVideoData) => ({ ...currRecipeVideoData, recipeVideo: videofile }))
            }
            //if user send multiple images
            if (name === "images") {
                const newImagefile = files[0]
                // console.log("new images data : ", newImagefile)
                setRecipeData((currRecipeImageData) => ({ ...currRecipeImageData, images: [...currRecipeImageData.images, newImagefile] }))
            }
        }
    }


    // console.log("recipe data : ", recipeData);
    useEffect(() => {
        const ingredients = ingredientField.filter((ingredient) => ingredient.value.trim() !== "")
            .map((ingredient) => ingredient.value)
        const instructions = instructionField.filter((instruction) => instruction.value.trim() !== "")
            .map((instruction, index) => ({ stepNumber: index + 1, text: instruction.value }))
        // console.log(ingredients);
        // console.log(instructions)
        setRecipeData((currRecipeData) => ({
            ...currRecipeData,
            ingredients: ingredients,
            instructions: instructions,
        }));
    }, [ingredientField, instructionField])

    function handleSubmitRecipe() {
        console.log("Recipe data : ", recipeData);

    }

    // console.log(recipeData);
    return (
        <div className="bg-gradient-to-r from-yellow-100 via-orange-100 to-red-100 min-h-screen p-8">
            <div className="container mx-auto max-w-3xl">
                <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">Add Your New Recipe</h2>

                {/* Recipe Title */}
                <div className="mb-6">
                    <label className="block text-gray-700 font-semibold mb-2">Recipe Title</label>
                    <input
                        type="text"
                        name="recipeTitle"
                        value={recipeData.recipeTitle}
                        className="w-full p-3 border-2 border-orange-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                        placeholder="Enter recipe title"
                        onChange={handleInputChange}
                    />
                </div>

                {/* Description */}
                <div className="mb-6">
                    <label className="block text-gray-700 font-semibold mb-2">Description</label>
                    <textarea
                        name="description"
                        rows="4"
                        className="w-full p-3 border-2 border-orange-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                        placeholder="Introduce your recipe, add notes, cooking tips, serving suggestions, etc..."
                        value={recipeData.description}
                        onChange={handleInputChange}
                    ></textarea>
                </div>

                {/* Ingredients */}
                <div className="mb-6">
                    <label className="block text-gray-700 font-semibold mb-2">Ingredients</label>

                    {
                        ingredientField.map((inputs) => (
                            <input
                                key={inputs.id}
                                type="text"
                                value={inputs.value}
                                onChange={(e) => { handleIngredientsInputChange(inputs.id, e.target.value) }}
                                className="w-full p-3 border-2 border-orange-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 mb-2"
                                placeholder="e.g., 2 Tbsp olive oil"
                            />
                        ))
                    }
                    <button
                        type="button"
                        className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-semibold shadow-md"
                        onClick={addDynamicIngredientInputField}
                    >
                        + Add Ingredient
                    </button>
                </div>

                {/* Instructions */}
                <div className="mb-6">
                    <label className="block text-gray-700 font-semibold mb-2">Instructions</label>
                    {
                        instructionField.map((instructions) => (
                            <input
                                key={instructions.id}
                                type="text"
                                value={instructions.value}
                                onChange={(e) => { handleInstructionInputChange(instructions.id, e.target.value) }}
                                className="w-full p-3 border-2 border-orange-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 mb-2"
                                placeholder="Paste one or multiple steps (e.g. Finely chop the garlic)"
                            />
                        ))
                    }

                    <button
                        type="button"
                        className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-semibold shadow-md"
                        onClick={addDynamicInstructionField}
                    >
                        + Add Step
                    </button>
                </div>

                {/* Prep and Cook Time */}
                <div className="flex space-x-4 mb-6">
                    <div className="w-1/2">
                        <label className="block text-gray-700 font-semibold mb-2">Prep Time</label>
                        <input
                            type="text"
                            name="prepTime"
                            value={recipeData.prepTime}
                            className="w-full p-3 border-2 border-orange-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                            placeholder="e.g., 15 mins"
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="w-1/2">
                        <label className="block text-gray-700 font-semibold mb-2">Cook Time</label>
                        <input
                            type="text"
                            name="cookTime"
                            value={recipeData.cookTime}
                            className="w-full p-3 border-2 border-orange-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                            placeholder="e.g., 30 mins"
                            onChange={handleInputChange}
                        />
                    </div>
                </div>

                {/* Video Upload */}
                <div className="mb-6">
                    <label className="block text-gray-700 font-semibold mb-2">Upload Recipe Video (Optional)</label>
                    <input
                        type="file"
                        name="recipeVideo"
                        accept="video/*"
                        className="w-full p-2 border-2 border-orange-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                        onChange={handleInputChange}
                    />
                </div>

                {/* Image Upload */}
                <div className="mb-6">
                    <label className="block text-gray-700 font-semibold mb-2">Upload Recipe Images (Optional)</label>
                    <input
                        type="file"
                        name="images"
                        accept="image/*"
                        multiple
                        className="w-full p-2 border-2 border-orange-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                        onChange={handleInputChange}
                    />
                </div>

                {/* Submit Button */}
                <div className="text-center">
                    <button
                        type="submit"
                        className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-full shadow-md transition duration-300"
                        onClick={handleSubmitRecipe}
                    >
                        Submit Recipe
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddRecipe;
