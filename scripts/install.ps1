# UI Pipeline PowerShell Installer
param (
    [string]$Platform = "all",
    [string]$Target = "."
)

$ErrorActionPreference = "Stop"
$ScriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path

# Prefer node if available, otherwise python
if (Get-Command node -ErrorAction SilentlyContinue) {
    node "$ScriptDir\install.js" --platform $Platform --target $Target
} elseif (Get-Command python -ErrorAction SilentlyContinue) {
    python "$ScriptDir\install.py" --platform $Platform --target $Target
} elseif (Get-Command python3 -ErrorAction SilentlyContinue) {
    python3 "$ScriptDir\install.py" --platform $Platform --target $Target
} else {
    Write-Error "Neither Node.js nor Python was found on your PATH. Please install Node.js or Python to run the installer."
    exit 1
}
