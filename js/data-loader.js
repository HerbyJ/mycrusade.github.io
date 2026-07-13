// =====================================
// My Crusade
// Data Loader
// =====================================

async function loadData(file) {

    try {

        const response = await fetch(file);

        if (!response.ok) {

            throw new Error(`Unable to load ${file}`);

        }

        return await response.json();

    }
    catch (error) {

        console.error(error);

        return [];

    }

}