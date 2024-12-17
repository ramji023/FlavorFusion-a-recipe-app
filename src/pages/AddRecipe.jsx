import { useState } from "react";

const AddRecipe = () => {

    //define state for managing whole recipe data 
    const [recipeData,setRecipeData] = useState(
        {
            
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

    function handleInputChange(id, newValue) {
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





    function handleSubmitRecipe() {
        console.log("all ingredients data  : ", ingredientField);
        console.log("all instructions are : ", instructionField);
    }
    return (
        <div className="bg-gradient-to-r from-yellow-100 via-orange-100 to-red-100 min-h-screen p-8">
            <div className="container mx-auto max-w-3xl">
                <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">Add Your New Recipe</h2>

                {/* Recipe Title */}
                <div className="mb-6">
                    <label className="block text-gray-700 font-semibold mb-2">Recipe Title</label>
                    <input
                        type="text"
                        className="w-full p-3 border-2 border-orange-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                        placeholder="Enter recipe title"
                    />
                </div>

                {/* Description */}
                <div className="mb-6">
                    <label className="block text-gray-700 font-semibold mb-2">Description</label>
                    <textarea
                        rows="4"
                        className="w-full p-3 border-2 border-orange-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                        placeholder="Introduce your recipe, add notes, cooking tips, serving suggestions, etc..."
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
                                onChange={(e) => { handleInputChange(inputs.id, e.target.value) }}
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



                    {/* <input
                        type="text"
                        className="w-full p-3 border-2 border-orange-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 mb-2"
                        placeholder="Paste one or multiple steps (e.g. Finely chop the garlic)"
                    /> */}
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
                            className="w-full p-3 border-2 border-orange-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                            placeholder="e.g., 15 mins"
                        />
                    </div>
                    <div className="w-1/2">
                        <label className="block text-gray-700 font-semibold mb-2">Cook Time</label>
                        <input
                            type="text"
                            className="w-full p-3 border-2 border-orange-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                            placeholder="e.g., 30 mins"
                        />
                    </div>
                </div>

                {/* Video Upload */}
                <div className="mb-6">
                    <label className="block text-gray-700 font-semibold mb-2">Upload Recipe Video (Optional)</label>
                    <input
                        type="file"
                        accept="video/*"
                        className="w-full p-2 border-2 border-orange-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                </div>

                {/* Image Upload */}
                <div className="mb-6">
                    <label className="block text-gray-700 font-semibold mb-2">Upload Recipe Images (Optional)</label>
                    <input
                        type="file"
                        accept="image/*"
                        multiple
                        className="w-full p-2 border-2 border-orange-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
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
