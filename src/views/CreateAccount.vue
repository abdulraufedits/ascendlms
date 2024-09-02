<template>
    <div class="container mx-auto mt-8 flex flex-col items-center gap-y-6">
        <h1 class="h1-title text-center">Who are you?</h1>
        <main class="flex flex-col items-center gap-y-7">
            <form id="profession-form" @submit.prevent="submitForm()" class="lg:flex w-4/5 gap-4 max-lg:space-y-4">
                <div class="w-full border-ddd rounded-3xl border-2 overflow-hidden">
                    <img src="../assets/teacher.svg" alt="instructor image" class="radio-img">
                <div class="py-8 grid place-content-center">
                    <label class="font-big text-4xl"><input type="radio" name="type" id="instructor-check" value="instructor" v-model="prof">I'm an Instructor</label>
                </div>
                </div>
                <div class="w-full border-ddd rounded-3xl border-2 overflow-hidden">
                    <img src="../assets/student.svg" alt="student image" class="radio-img">
                <div class="py-8 grid place-content-center">
                    <label class="font-big text-4xl"><input type="radio" name="type" id="student-check" value="student" v-model="prof">I'm a Student</label>
                </div>
                </div>
            </form>
            <button form="profession-form" type="submit" class="px-5 min-w-12 min-h-12 py-3 rounded-full font-small transition-all duration-300" :class="prof == null ? 'text-gray-400 bg-gray-200 pointer-events-none':'text-white bg-primary'">{{ selectedRadio == null ? 'Create account': selectedRadio }}</button>
            <p class="font-small text-center -mt-2 mb-4">Already have an account? <RouterLink to="/login" class=" text-primary">Login</RouterLink></p>
        </main>

    </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter()
const prof = ref(null)
const selectedRadio = computed(()=> {
    return prof.value === 'instructor' ? 'Apply as Instructor' : prof.value === 'student' ? 'Join as Student' : null;
})

function submitForm(){
    router.push({name: "Sign up", query: {p: prof.value}})
}
</script>

<style scoped>
.radio-img{
    height: 400px;
    width: 100%;
    object-fit: cover;
    background-color: #F3F3FC;
    
}

input[type=radio] {
  --s: 1em;     /* control the size */
  --c: #3C3ACF; /* the active color */
  
  height: var(--s);
  aspect-ratio: 1;
  border: calc(var(--s)/8) solid #AAAAAA;
  padding: calc(var(--s)/8);
  background: 
     radial-gradient(farthest-side,var(--c) 94%,#0000) 
     50%/0 0 no-repeat content-box; 
  border-radius: 50%;
  outline-offset: calc(var(--s)/10);
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  cursor: pointer;
  font-size: inherit;
  transition: .3s ease-in-out;
}
input[type=radio]:checked {
  border-color: var(--c);
  background-size: 100% 100%;
}

input[type=radio]:disabled {
  background: 
     linear-gradient(#939393 0 0) 
     50%/100% 20% no-repeat content-box;
  opacity: .5;
  cursor: not-allowed;
}

@media print {
  input[type=radio] {
    -webkit-appearance: auto;
    -moz-appearance: auto;
    appearance: auto;
    background: none;
  }
}

label {
  display:inline-flex;
  align-items:center;
  gap:10px;
  margin:5px 0;
  cursor: pointer;
}
</style>