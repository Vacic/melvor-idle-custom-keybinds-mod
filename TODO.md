Refactor using Sidebar API - seems like it could be a better solution than what i have.
sidebar is a global - sidebar.categories() returns all categories with all of the submenu items as well
i could create it to be dynamic based on what the users sees. This would also allow setting keybinds to custom mods as well
https://wiki.melvoridle.com/w/Mod_Creation/Sidebar_API_Reference#category(id:_string,_config?:_CategoryConfig,_builder?:_(category:_Category)_=%3E_void):_Category

https://wiki.melvoridle.com/w/Mod_Creation/Mod_Context_API_Reference#type(name:_string,_config:_SettingTypeConfig):_void -> rest of the modding doc links at the bottom of this one

confirmation dialog for Clear All / Restore Defaults - PetiteVue exposed https://wiki.melvoridle.com/w/Mod_Creation/Reusable_Components_with_PetiteVue?utm_source=chatgpt.com
Button takes HTML element as well, could use either this or vanilla js to create the functionality
using PetitieVue i might be able to get the same component as MelvorIdle is using

<div id="app" v-scope>
  <!-- Button to trigger the dialog -->
  <button @click="$refs.myDialog.showModal()">Open Pop Up</button>

  <!-- The Native Dialog Element -->
  <dialog ref="myDialog">
    <div class="dialog-content">
      <h3>Petite-Vue Pop Up</h3>
      <p>This is a native dialog that works seamlessly with Petite-Vue!</p>
      
      <!-- Close button inside the dialog -->
      <button @click="$refs.myDialog.close()">Close</button>
    </div>
  </dialog>
</div>

dialog {
border: none;
border-radius: 8px;
padding: 0;
box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

dialog::backdrop {
background-color: rgba(0, 0, 0, 0.5); /_ Dim the background _/
}

.dialog-content {
padding: 20px;
width: 300px;
}
