package com.criztiandev.extractionchest;

import org.bukkit.plugin.java.JavaPlugin;

public class ExtractionChestPlugin extends JavaPlugin {

  @Override
  public void onEnable() {
    getLogger().info("ExtractionChest has been enabled!");
    saveDefaultConfig();
  }

  @Override
  public void onDisable() {
    getLogger().info("ExtractionChest has been disabled!");
  }
}
