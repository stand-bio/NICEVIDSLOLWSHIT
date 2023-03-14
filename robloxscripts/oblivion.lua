repeat wait() until game:IsLoaded()

local old

old = hookfunction(game.HttpGet, newcclosure(function(self, ...)
    if string.find(..., "modlist") then
        return [[
Whitelisted = {
  ]]..game:GetService("Players").LocalPlayer.UserId..[[
} 

return Whitelisted
        ]]
    end
  return old(self, ...) 
end))
loadstring(game:HttpGet('https://raw.githubusercontent.com/CorruptOblivion/Oblivion/main/loader.lua'))()
