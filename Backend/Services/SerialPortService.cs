using System.IO.Ports;
using SerialApi.Models;

namespace SerialApi.Services
{
    public class SerialPortService
    {
        private readonly ILogger<SerialPortService> _logger;
        
        // TODO Port und Baudrate sollten nicht hardcoded sein, vielleicht an Product/Vendor ID erkennen?
        private readonly SerialPort _serialPort = new("COM1", 9600);

        public SerialPortService(ILogger<SerialPortService> logger)
        {
            _logger = logger;

            // _serialPort.Open();
        }

        public void SendCommand(SerialCommand command)
        {
            _logger.LogInformation($"Sending command: {command}");
            // _serialPort.WriteLine(command.ToString());
        }
    }
}