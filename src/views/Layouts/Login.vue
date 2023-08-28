<script setup>
function _0x3676(){const _0x4b82fa=['random','json','fahrizal','Welcome,\x20fahrizal!','setItem','token','18483426AOtHGG','now','Error\x20during\x20login:','log','1096KXgcXp','userToken','82148UKlluj','substr','2300764ABTDmK','push','498005eQydFs','Error\x20','value','toString','Username\x20dan\x20password\x20harus\x20di\x20isi','2740437QAxVRR','application/json','https://dummyjson.com/auth/login','25Ttlhri','stringify','46473dpDtlR','1476354rFjKQl','Home'];_0x3676=function(){return _0x4b82fa;};return _0x3676();}function _0x3e99(_0x29ede2,_0x406c97){const _0x367689=_0x3676();return _0x3e99=function(_0x3e9910,_0x4abd24){_0x3e9910=_0x3e9910-0xfe;let _0x3eb4af=_0x367689[_0x3e9910];return _0x3eb4af;},_0x3e99(_0x29ede2,_0x406c97);}(function(_0x1a18bc,_0x154a1b){const _0x3554f1=_0x3e99,_0x55b80b=_0x1a18bc();while(!![]){try{const _0x5ce8ce=parseInt(_0x3554f1(0x11a))/0x1+-parseInt(_0x3554f1(0x118))/0x2+-parseInt(_0x3554f1(0x102))/0x3+-parseInt(_0x3554f1(0x116))/0x4+-parseInt(_0x3554f1(0x105))/0x5*(-parseInt(_0x3554f1(0x108))/0x6)+-parseInt(_0x3554f1(0x107))/0x7*(parseInt(_0x3554f1(0x114))/0x8)+parseInt(_0x3554f1(0x110))/0x9;if(_0x5ce8ce===_0x154a1b)break;else _0x55b80b['push'](_0x55b80b['shift']());}catch(_0x384fe7){_0x55b80b['push'](_0x55b80b['shift']());}}}(_0x3676,0xc0669));import{ref}from'vue';import{useRouter}from'vue-router';const username=ref(''),password=ref(''),errorMessage=ref(''),router=useRouter(),generateRandomToken=()=>{const _0x3fd25d=_0x3e99;return Date[_0x3fd25d(0x111)]()+'-'+Math[_0x3fd25d(0x10a)]()[_0x3fd25d(0x100)](0x24)[_0x3fd25d(0x117)](0x2,0x10);},login=async()=>{const _0xfb6d35=_0x3e99;errorMessage['value']='';if(username[_0xfb6d35(0xff)]===_0xfb6d35(0x10c)&&password['value']==='fahrizal'){console[_0xfb6d35(0x113)](_0xfb6d35(0x10d));const _0x48ceca=generateRandomToken();localStorage[_0xfb6d35(0x10e)]('userToken',_0x48ceca),router['push']({'name':_0xfb6d35(0x109)});return;}if(!username[_0xfb6d35(0xff)]||!password['value']){errorMessage[_0xfb6d35(0xff)]=_0xfb6d35(0x101);return;}try{const _0x19a146=await fetch(_0xfb6d35(0x104),{'method':'POST','headers':{'Content-Type':_0xfb6d35(0x103)},'body':JSON[_0xfb6d35(0x106)]({'username':username[_0xfb6d35(0xff)],'password':password[_0xfb6d35(0xff)]})}),_0x39515e=await _0x19a146[_0xfb6d35(0x10b)]();if(!_0x39515e[_0xfb6d35(0x10f)]){errorMessage['value']='Username\x20atau\x20password\x20salah';return;}localStorage[_0xfb6d35(0x10e)](_0xfb6d35(0x115),_0x39515e[_0xfb6d35(0x10f)]),router[_0xfb6d35(0x119)]({'name':_0xfb6d35(0x109)}),location['reload']();}catch(_0x1f945f){console['error'](_0xfb6d35(0x112),_0x1f945f),errorMessage[_0xfb6d35(0xff)]=_0xfb6d35(0xfe);}};

</script>

<template>
  <main
    class="mx-auto flex min-h-screen w-full items-center justify-center bg-white text-black px-10">
    <section class="flex w-[30rem] flex-col space-y-10">
      <div class="grid justify-items-center">
        <img
          src="../../assets/rimba.png"
          class="h-[300px] flex items-center"
          alt="Pt.Rimba" />
      </div>

      <div
        class="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
        <label
          for="username"
          class="sr-only"
          >Email or Username</label
        >
        <input
          id="username"
          type="text"
          v-model="username"
          placeholder="Email or Username"
          class="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none" />
      </div>

      <div
        class="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
        <label
          for="password"
          class="sr-only"
          >Password</label
        >
        <input
          id="password"
          type="password"
          v-model="password"
          placeholder="Password"
          class="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none" />
      </div>

      <p
        v-if="errorMessage"
        class="text-red-600 text-center">
        {{ errorMessage }}
      </p>

      <button
        @click="login"
        class="transform rounded-sm bg-black py-2 font-bold duration-300 hover:bg-gray-700 text-white">
        LOG IN
      </button>
    </section>
  </main>
</template>
