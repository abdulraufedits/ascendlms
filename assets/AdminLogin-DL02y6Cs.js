import{_ as y,u as N,a as S,r as l,b as k,c as L,d as o,e as U,w as V,f as d,g as z,h as p,v as m,n as v,o as C,i as D,R as I,p as j,j as A,k as B}from"./index-2Ad6mehH.js";const f=n=>(j("data-v-aebc6483"),n=n(),A(),n),M={class:"w-full grid place-content-center h-screen"},R={class:"flex flex-col gap-y-6 font-small"},q=f(()=>o("img",{class:"w-auto h-8",src:B,alt:""},null,-1)),E=f(()=>o("h1",{class:"text-3xl bold text-grey font-big font-bold"},"Login as admin",-1)),T=f(()=>o("input",{type:"submit",value:"Login",class:"cta font-big text-white font-medium cursor-pointer hover:bg-gray-900 transition-colors duration-300"},null,-1)),$={__name:"AdminLogin",setup(n){const _=N(),x=S(),r=l(""),i=l(""),c=l("");let g=l(!1);const b=k();function w(h,e,a){fetch("https://ascendapi-b810cfaf8c4a.herokuapp.com/admin").then(s=>s.json()).then(s=>{s.username==h&&s.email==e&&s.password==a&&(b.push(`/admin/${s.username}/dashboard`),_.getUserData(s),fetch("https://ascendapi-b810cfaf8c4a.herokuapp.com/courses").then(u=>u.json()).then(u=>{u.forEach(t=>{x.getCoursesData({id:t.id,courseName:t.courseName,courseDesc:t.courseDesc,category:t.category,lectureNotes:t.lectureNotes,assignments:t.assignments,quizzes:t.quizzes,announcements:t.announcements,students:t.students,mentors:t.mentors})})}))}).catch(s=>console.log(s))}return(h,e)=>(C(),L("main",M,[o("div",R,[U(d(I),{to:"/",class:"flex items-center font-extrabold font-big rounded outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"},{default:V(()=>[q,D("   Ascend LMS ")]),_:1}),E,o("form",{action:"",class:"flex flex-col gap-4",onSubmit:e[3]||(e[3]=z(a=>w(c.value,r.value,i.value),["prevent"]))},[p(o("input",{autocomplete:"username",type:"text",class:v(["input-field",d(g)?"err":""]),placeholder:"username","onUpdate:modelValue":e[0]||(e[0]=a=>c.value=a)},null,2),[[m,c.value]]),p(o("input",{autocomplete:"email",type:"email",class:v(["input-field",d(g)?"err":""]),placeholder:"email address","onUpdate:modelValue":e[1]||(e[1]=a=>r.value=a)},null,2),[[m,r.value]]),p(o("input",{autocomplete:"new-password",type:"password",class:"input-field",placeholder:"password","onUpdate:modelValue":e[2]||(e[2]=a=>i.value=a)},null,512),[[m,i.value]]),T],32)])]))}},G=y($,[["__scopeId","data-v-aebc6483"]]);export{G as default};
