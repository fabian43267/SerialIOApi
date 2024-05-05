using Microsoft.AspNetCore.Mvc;
using SerialApi.Models;
using SerialApi.Services;

namespace SerialApi.Controllers;

[ApiController]
[Route("[controller]")]
public class SerialController : ControllerBase
{
    private readonly ILogger<SerialController> _logger;
    private readonly SerialPortService _serialPortService;

    public SerialController(ILogger<SerialController> logger, SerialPortService serialPortService)
    {
        _logger = logger;
        _serialPortService = serialPortService;
    }

    [HttpPost("command")]
    public ActionResult SendCommand([FromBody] SerialCommand command)
    {
        _serialPortService.SendCommand(command);
        return Ok(command);
    }
}
