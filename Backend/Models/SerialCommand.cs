namespace SerialApi.Models;

public class SerialCommand
{
    public string Device { get; set; }
    public string Command { get; set; }

    public override string ToString()
    {
        return $"{Device}:{Command}";
    }
}