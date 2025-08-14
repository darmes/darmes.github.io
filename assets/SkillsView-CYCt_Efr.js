import{c as l,o,a as $,m as c,B as D,s as L,f as z,b as d,r as g,d as u,e as v,t as P,g as y,u as b,_ as w,F as _,h as I,i as h,w as s,j as i}from"./index-CyJ5wGKn.js";import{D as B,a as M}from"./DetailRoot-DAMExbg6.js";import{s as T}from"./index-CWWOu1wC.js";var k={name:"TimesCircleIcon",extends:T};function N(e,n,m,C,p,t){return o(),l("svg",c({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.pti()),n[0]||(n[0]=[$("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M7 14C5.61553 14 4.26215 13.5895 3.11101 12.8203C1.95987 12.0511 1.06266 10.9579 0.532846 9.67879C0.00303296 8.3997 -0.13559 6.99224 0.134506 5.63437C0.404603 4.2765 1.07129 3.02922 2.05026 2.05026C3.02922 1.07129 4.2765 0.404603 5.63437 0.134506C6.99224 -0.13559 8.3997 0.00303296 9.67879 0.532846C10.9579 1.06266 12.0511 1.95987 12.8203 3.11101C13.5895 4.26215 14 5.61553 14 7C14 8.85652 13.2625 10.637 11.9497 11.9497C10.637 13.2625 8.85652 14 7 14ZM7 1.16667C5.84628 1.16667 4.71846 1.50879 3.75918 2.14976C2.79989 2.79074 2.05222 3.70178 1.61071 4.76768C1.16919 5.83358 1.05367 7.00647 1.27876 8.13803C1.50384 9.26958 2.05941 10.309 2.87521 11.1248C3.69102 11.9406 4.73042 12.4962 5.86198 12.7212C6.99353 12.9463 8.16642 12.8308 9.23232 12.3893C10.2982 11.9478 11.2093 11.2001 11.8502 10.2408C12.4912 9.28154 12.8333 8.15373 12.8333 7C12.8333 5.45291 12.2188 3.96918 11.1248 2.87521C10.0308 1.78125 8.5471 1.16667 7 1.16667ZM4.66662 9.91668C4.58998 9.91704 4.51404 9.90209 4.44325 9.87271C4.37246 9.84333 4.30826 9.8001 4.2544 9.74557C4.14516 9.6362 4.0838 9.48793 4.0838 9.33335C4.0838 9.17876 4.14516 9.0305 4.2544 8.92113L6.17553 7L4.25443 5.07891C4.15139 4.96832 4.09529 4.82207 4.09796 4.67094C4.10063 4.51982 4.16185 4.37563 4.26872 4.26876C4.3756 4.16188 4.51979 4.10066 4.67091 4.09799C4.82204 4.09532 4.96829 4.15142 5.07887 4.25446L6.99997 6.17556L8.92106 4.25446C9.03164 4.15142 9.1779 4.09532 9.32903 4.09799C9.48015 4.10066 9.62434 4.16188 9.73121 4.26876C9.83809 4.37563 9.89931 4.51982 9.90198 4.67094C9.90464 4.82207 9.84855 4.96832 9.74551 5.07891L7.82441 7L9.74554 8.92113C9.85478 9.0305 9.91614 9.17876 9.91614 9.33335C9.91614 9.48793 9.85478 9.6362 9.74554 9.74557C9.69168 9.8001 9.62748 9.84333 9.55669 9.87271C9.4859 9.90209 9.40996 9.91704 9.33332 9.91668C9.25668 9.91704 9.18073 9.90209 9.10995 9.87271C9.03916 9.84333 8.97495 9.8001 8.9211 9.74557L6.99997 7.82444L5.07884 9.74557C5.02499 9.8001 4.96078 9.84333 4.88999 9.87271C4.81921 9.90209 4.74326 9.91704 4.66662 9.91668Z",fill:"currentColor"},null,-1)]),16)}k.render=N;var R=`
    .p-chip {
        display: inline-flex;
        align-items: center;
        background: dt('chip.background');
        color: dt('chip.color');
        border-radius: dt('chip.border.radius');
        padding-block: dt('chip.padding.y');
        padding-inline: dt('chip.padding.x');
        gap: dt('chip.gap');
    }

    .p-chip-icon {
        color: dt('chip.icon.color');
        font-size: dt('chip.icon.font.size');
        width: dt('chip.icon.size');
        height: dt('chip.icon.size');
    }

    .p-chip-image {
        border-radius: 50%;
        width: dt('chip.image.width');
        height: dt('chip.image.height');
        margin-inline-start: calc(-1 * dt('chip.padding.y'));
    }

    .p-chip:has(.p-chip-remove-icon) {
        padding-inline-end: dt('chip.padding.y');
    }

    .p-chip:has(.p-chip-image) {
        padding-block-start: calc(dt('chip.padding.y') / 2);
        padding-block-end: calc(dt('chip.padding.y') / 2);
    }

    .p-chip-remove-icon {
        cursor: pointer;
        font-size: dt('chip.remove.icon.size');
        width: dt('chip.remove.icon.size');
        height: dt('chip.remove.icon.size');
        color: dt('chip.remove.icon.color');
        border-radius: 50%;
        transition:
            outline-color dt('chip.transition.duration'),
            box-shadow dt('chip.transition.duration');
        outline-color: transparent;
    }

    .p-chip-remove-icon:focus-visible {
        box-shadow: dt('chip.remove.icon.focus.ring.shadow');
        outline: dt('chip.remove.icon.focus.ring.width') dt('chip.remove.icon.focus.ring.style') dt('chip.remove.icon.focus.ring.color');
        outline-offset: dt('chip.remove.icon.focus.ring.offset');
    }
`,V={root:"p-chip p-component",image:"p-chip-image",icon:"p-chip-icon",label:"p-chip-label",removeIcon:"p-chip-remove-icon"},A=D.extend({name:"chip",style:R,classes:V}),F={name:"BaseChip",extends:L,props:{label:{type:[String,Number],default:null},icon:{type:String,default:null},image:{type:String,default:null},removable:{type:Boolean,default:!1},removeIcon:{type:String,default:void 0}},style:A,provide:function(){return{$pcChip:this,$parentInstance:this}}},S={name:"Chip",extends:F,inheritAttrs:!1,emits:["remove"],data:function(){return{visible:!0}},methods:{onKeydown:function(n){(n.key==="Enter"||n.key==="Backspace")&&this.close(n)},close:function(n){this.visible=!1,this.$emit("remove",n)}},computed:{dataP:function(){return z({removable:this.removable})}},components:{TimesCircleIcon:k}},K=["aria-label","data-p"],j=["src"];function G(e,n,m,C,p,t){return p.visible?(o(),l("div",c({key:0,class:e.cx("root"),"aria-label":e.label},e.ptmi("root"),{"data-p":t.dataP}),[g(e.$slots,"default",{},function(){return[e.image?(o(),l("img",c({key:0,src:e.image},e.ptm("image"),{class:e.cx("image")}),null,16,j)):e.$slots.icon?(o(),u(v(e.$slots.icon),c({key:1,class:e.cx("icon")},e.ptm("icon")),null,16,["class"])):e.icon?(o(),l("span",c({key:2,class:[e.cx("icon"),e.icon]},e.ptm("icon")),null,16)):d("",!0),e.label!==null?(o(),l("div",c({key:3,class:e.cx("label")},e.ptm("label")),P(e.label),17)):d("",!0)]}),e.removable?g(e.$slots,"removeicon",{key:0,removeCallback:t.close,keydownCallback:t.onKeydown},function(){return[(o(),u(v(e.removeIcon?"span":"TimesCircleIcon"),c({class:[e.cx("removeIcon"),e.removeIcon],onClick:t.close,onKeydown:t.onKeydown},e.ptm("removeIcon")),null,16,["class","onClick","onKeydown"]))]}):d("",!0)],16,K)):d("",!0)}S.render=G;const E=y({name:"DetailChipList",components:{Chip:S},props:{chips:{type:Array,required:!0}},setup(){return{windowSize:b()}},computed:{isMobile(){return this.windowSize.width.value<=768}}}),J={class:"DetailChipList"};function Q(e,n,m,C,p,t){const a=h("chip");return o(),l("div",J,[(o(!0),l(_,null,I(e.chips,(r,f)=>(o(),u(a,{class:"Chip",label:r,key:f},null,8,["label"]))),128))])}const W=w(E,[["render",Q],["__scopeId","data-v-ae8fdbb8"]]),Z=y({name:"SkillsView",components:{DetailCard:M,DetailChipList:W,DetailRoot:B},setup(){return{windowSize:b()}},computed:{isMobile(){return this.windowSize.width.value<=768}}});function q(e,n,m,C,p,t){const a=h("DetailChipList"),r=h("DetailCard"),f=h("DetailRoot");return o(),u(f,{title:"Skills",subtitle:"A comprehensive overview of my technical and soft skills, catergorized for clarity"},{default:s(()=>[i(r,{title:"Programming Languages"},{default:s(()=>[i(a,{chips:["Python","Typescript","Javascript","Ruby","C#","Delphi","Scheme","M"]})]),_:1}),i(r,{title:"Frameworks"},{default:s(()=>[i(a,{chips:["Vue.js","Node.js","jQuery","ASP.NET","Flask","Unity","Godot","RPG Maker"]})]),_:1}),i(r,{title:"Databases"},{default:s(()=>[i(a,{chips:["PostgreSQL","Microsoft SQL Server","Caché"]})]),_:1}),i(r,{title:"Technologies"},{default:s(()=>[i(a,{chips:["AWS","Git","Github","SVN","Docker","Airflow","Snowflake","DBT","Datadog","PagerDuty","Sentry","Pendo","Jellyfish","Jira","Confluence","Microsoft Office","Blender"]})]),_:1}),i(r,{title:"Leadership"},{default:s(()=>[i(a,{chips:["Team Management","Mentoring","Project Leadership","Code Review","Interviewing","Hiring","Direct Feedback","Coaching","Dynamic Planning"]})]),_:1}),i(r,{title:"Communication"},{default:s(()=>[i(a,{chips:["Technical Documentation","Presentations","Cross-functional Collaboration","Requirement Writing","User Feedback"]})]),_:1})]),_:1})}const X=w(Z,[["render",q],["__scopeId","data-v-55faa7a9"]]);export{X as default};
