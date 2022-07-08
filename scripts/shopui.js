import * as MinecraftUi from "mojang-minecraft-ui";

// Menu Shop
let shopui = new MinecraftUi.ActionFormData()
  .title("§r§aOcto §eShop§r")
  .button("§2Objets§8", "textures/items/apple.png")
  .button("§2Utilitaires§8", "textures/ui/debug_glyph_color.png")
shopui.show(player).then(res => {
    if (res.isCanceled == true) return runCommandwo(`tellraw ${player.nameTag} {"rawtext": [{"text": "§r§8[§aOcto §eShop§8] §cAchat annulé!§r"}]}`)

    // MENU BLOCK
    if (res.selection == 0) {
      let blocksui = new MinecraftUi.ActionFormData()
      blocksui.title("§r§aOcto §eShop§r")
      for (const itemm of Shopitems) { blocksui.button(`§c${itemm.liste_item} \n[${itemm.prix} pcs]`, `${itemm.Icons}`) }
      blocksui.show(player).then(res => {
        // Code here
      })
    }
  });