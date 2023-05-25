<template>
    <div class="container mt-20 my-0 px-0 mx-auto bg-teal-50 ">

        <section class="mb-16 bg-gradient-to-br from-teal-600 via-teal-400 to-teal-200 text-zinc-800 text-center">
            <div class="flex justify-center">
                <div class="max-w-[800px]">
                    <h2 class="mt-10 text-5xl md:text-6xl xl:text-5xl font-bold tracking-tight mb-6">
                        Frequently asked <br />questions <br />
                    </h2>
                    <p class="text-gray-500 text-lg">
                    <div class="relative mb-6 col-span-2">
                        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M8 14a6 6 0 1 0 0-12 6 6 0 0 0 0 12zm0 1a7 7 0 1 0 0-14 7 7 0 0 0 0 14zm6.707-1.293l4 4-1.414 1.414-4-4 1.414-1.414z" />
                            </svg>


                        </div>
                        <input type="text" id="search"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 w-full focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="search" />
                    </div>
                    </p>
                </div>
            </div>
        </section>
        <section class="bg-white text-teal-800 text-center">
            <div class="flex flex-col md:flex-row pl-4">
                <div class="w-100% md:w-1/4 bg-white pl-2 p-4">
                    <!-- Menu content -->
                    <div class="flex flex-row flex-wrap md:flex-col items-center mt-9">
                        <button v-for="category in categories" :key="category.id" @click="selectCategory(category)"
                            class="flex flex-col items-center justify-center w-20 md:w-40 h-6 md:h-12 p-4 mb-1 md:mb-10 space-y-2 bg-gray-100 rounded-md shadow-md hover:bg-gray-200 transition-colors duration-300 border-2 border-gray-400">
                            <i class="fas fa-arrow-down"></i>
                            <span class="text-gray-800">{{ category.name }}</span>
                        </button>

                    </div>

                </div>
                <div class="w-full md:w-3/4 pt-10 pb-10 mr-10 text-zinc-100">
                    <!-- Content area -->

                    <div v-if="selectedCategory" class="right ml-0 mr-5 md:mr-10 text-zinc-100 shadow-lg">

                        <div v-for="question in selectedCategory.questions" :key="question.id" class="tab">
                            <input type="checkbox" name="acc" :id="question.label" class="accordion-checkbox">
                            <label :for="question.label">
                                <h2></h2>
                                <h3>{{ question.question }}</h3>
                            </label>
                            <div class="content">
                                <p>{{ question.text }}</p>
                            </div>
                        </div>


                    </div>

                </div>
            </div>

        </section>

        <section class="bg-teal-50 mb-0 text-gray-800 text-center">
            <div class="flex justify-center">
                <div class="md:ml-10 w-full md:mr-10 mb-16 text-zinc-800 text-center">
                    <div class="mt-10 md:w-240 bg-gradient-to-br from-teal-600 via-teal-400 to-teal-200 p-1 rounded-lg shadow-md">
                        <h2 class="mt-10 w-full text-5xl md:text-6xl xl:text-5xl font-bold tracking-tight mb-6">
                            Still have questions? <br />
                        </h2>
                        <p class="text-gray-500 text-lg">
                            <a class="inline-block px-7 py-3 bg-zinc-100 text-teal-600 font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-teal-50 hover:shadow-lg focus:bg-teal-50 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-teal-50 active:shadow-lg transition duration-150 ease-in-out mb-2 md:mr-2 justify-self-start"
                                href="#!" role="button" data-mdb-ripple="true" data-mdb-ripple-color="light">Contact us</a>
                        </p>
                    </div>
                </div>
            </div>
        </section>


    </div>
</template>

<script>
export default {
    data() {
        return {
            categories: [
                {
                    id: 1,
                    name: 'General',
                    questions: [
                        { id: 1, label: 'acc1', question: 'What is the company name?', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras convallis nunc vitae porttitor euismod. Mauris tincidunt eu enim ac pellentesque. Morbi gravida enim quis fermentum bibendum. Quisque eget erat at turpis condimentum pharetra. Sed consequat luctus leo sed elementum.' },
                        { id: 2, label: 'acc2', question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.?', text: 'consectetur adipiscing elit' },
                        { id: 3, label: 'acc3', question: 'Nullam ornare consectetur ex', text: 'ac fermentum augue fringilla at' },
                        { id: 4, label: 'acc4', question: 'Fusce lobortis mauris at justo mollis', text: 'non aliquam dui consectetur' },
                        // geetika u can add another questions here section
                    ],
                },
                {
                    id: 2,
                    name: 'Wizard',
                    questions: [
                        { id: 1, label: 'acc1', question: 'Q1', text: 'Wizard 2-1' },
                        { id: 2, label: 'acc2', question: 'Q2', text: 'Wizard 2-2' },
                        { id: 3, label: 'acc3', question: 'Q3', text: 'Wizard 2-3' },
                        { id: 4, label: 'acc4', question: 'Q4', text: 'Wizard 2-4' },
                        // geetika u can add another questions here section
                    ],
                },
                {
                    id: 3,
                    name: 'Maps',
                    questions: [
                        { id: 1, label: 'acc1', question: 'Q1', text: 'Maps 3-1' },
                        { id: 2, label: 'acc2', question: 'Q2', text: 'Maps 3-2' },
                        { id: 3, label: 'acc3', question: 'Q3', text: 'Maps 3-3' },
                        { id: 4, label: 'acc4', question: 'Q4', text: 'Maps 3-4' },
                        // geetika u can add another questions here section
                    ],
                },
                {
                    id: 4,
                    name: 'Studio',
                    questions: [
                        { id: 1, label: 'acc1', question: 'Q1', text: 'Studio 4-1' },
                        { id: 2, label: 'acc2', question: 'Q1', text: 'Studio 4-2' },
                        { id: 3, label: 'acc3', question: 'Q1', text: 'Studio 4-3' },
                        { id: 4, label: 'acc4', question: 'Q1', text: 'Studio 4-4' },
                        // geetika u can add another questions here section
                    ],
                },
                //u can add another category here
            ],
            activeItems:[],
            selectedCategory: null,
        };
    },
    mounted() {
        this.selectedCategory = this.categories[0];
       
    
    },
    methods: {
        selectCategory(category) {
            this.selectedCategory = category;
        },
        

    },
};
</script>

<style>
* {

    box-sizing: border-box;
    font-family: 'Roboto';
}

.right {

    display: flex;
    flex-direction: column;
    gap: 20px;
}

.right h1 {
    color: #87AE9B;
}

.right .tab {
    position: relative;
    background: linear-gradient(135deg, #5BE6E0, #4CC0BB, #358280);
    padding: 0 20px 20px;
    box-shadow: 0 15px 25px linear-gradient(135deg, #358280, #5E988D, #87AE9B);
    border-radius: 5px;
    overflow: hidden;
}

.right .tab input {
    appearance: none;

}



.right .tab label {
    display: flex;
    align-items: center;
    cursor: pointer;
}

.right .tab label::after {
    content: '+';
    position: absolute;
    right: 20px;
    font-size: 2em;
    color: linear-gradient(135deg, #C2FAE0);
    transition: transform 1s;
}

.right .tab:hover label::after {
    color: #358280;
}

.right .tab input:checked~label::after {
    transform: rotate(135deg);
    color: #358280;

}
.right .content input:not(:checked)~label::after {
    color: #87AE9B;


}
.right .tab label h2 {
    
    
    display: flex;
    justify-content: center;
    align-items: center;
    color: #358280;
    font-size: 1.25em;
    border-radius: 5px;
    margin-right: 10px;
}


.right .tab input:checked~label h2 {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #333;
    color: linear-gradient(135deg, #C2FAE0);
    font-size: 8em;
    justify-content: flex-end;
    padding: 20px;
}
.right .tab:nth-child(2) label h2 {
    color : #358280;
}

.right .tab:nth-child(2) input:checked + label h2 {
    background: linear-gradient(135deg, #358280, #5E988D, #87AE9B);
}

.right .tab:nth-child(3) label h2 {
    color : #fff;
}

.right .tab:nth-child(3) input:checked + label h2 {
    background: linear-gradient(135deg, #C2FAE0);
}

.right .tab:nth-child(4) label h2 {
    color : #ff96f9;
}
.right .tab:nth-child(4) input:checked + label h2 {
    background: linear-gradient(135deg, #358280, #5E988D, #87AE9B);
}

.right .tab:nth-child(5) label h2 {
    color : #fd6e6a;
}
.right .tab:nth-child(5) input:checked + label h2 {
    background: linear-gradient(135deg, #358280, #5E988D, #87AE9B);
}

.right label h3 {
    position: relative;
    font-weight: 500;
    color: #333;
    z-index: 10;
}

.right .tab input:checked~label h3 {
    background: #fff;
    padding: 2px 10px;
    color: #333;
    border-radius: 2px;
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.05);

}

.right .tab .content {
    max-height: 0vh;
    transition: 1s;
    overflow: hidden;
}

.right .tab input:checked~.content {
    max-height: 100vh;
}

.right .tab input:not(:checked)~.content {
    max-height: 0;
}

.right .tab .content p {
    position: relative;
    padding: 10px 0;
    color: #333;
    z-index: 10;
}

.right .tab input:checked~.content p {
    color: #fff;

}
</style>