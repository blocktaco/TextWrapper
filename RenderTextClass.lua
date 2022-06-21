local HttpService = game:GetService('HttpService')
local RenderTextClass = {}

function RenderTextClass.new(Text, Options)
    local RenderTextDataResponse = syn.request({
        Url = '',
        Method = 'POST',
        Headers = {
            ['Content-Type'] = 'application/json'
        },
        Body = HttpService:JSONEncode({
            text = Text,
            options = Options
        })
    })

    if (RenderTextDataResponse.Success) then
        -- Do Drawing
    end
end

return RenderTextClass

--[[

RenderTextClass.new('queercoded.wtf', {fontFamily = 'Tahoma', fontColor = Color3.new(1, 1, 1):ToHex()})

]]