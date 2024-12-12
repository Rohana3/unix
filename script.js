const data = {
  1: `
    <h3>Exit Commands</h3>
    <ul>
      <li><strong>Basic exit:</strong> Ends the session and uses the exit status of the last command<br>Command: <code>exit</code></li>
      <li><strong>Exit with status code:</strong> Indicate errors or specific conditions<br>Command: <code>exit(status)</code></li>
      <li><strong>exit 0:</strong> exit the shell with a success status (0) <code>exit 0</code></li>
      <li><strong>exit 1:</strong> exit the shell with a failure status (1) <code>exit 1</code></li>
      <li><strong>exit 2:</strong> exit the shell with a failure status (2) <code>exit 2</code></li>
      <li><strong>$?:</strong> After any command the variable $? stores the exit status of the last command <code>echo $?</code><br><img src="C:/Users/Rohana/OneDrive/Desktop/unix/Images/echo.jpg" alt="ls command output" class="example-image"></li>
    </ul>
  `,
  2: `
    <h3>Commands for Locating Commands</h3>
    <ul>
      <li><strong>PATH Environment Variable:</strong> Shows directories for executable search.<br>Example: <code>echo $PATH</code><br><img src="C:/Users/Rohana/OneDrive/Desktop/unix/Images/PATH Environment Variable.jpg" alt="ls command output" class="example-image"></li>
      <li><strong>which:</strong> Locates the directory of an executable.<br>Example: <code>which ls</code><br><img src="C:/Users/Rohana/OneDrive/Desktop/unix/Images/which.jpg" alt="ls command output" class="example-image"></li>
      <li><strong>whereis:</strong> Finds binaries, source files, and man pages.<br>Example: <code>whereis ls</code><br><img src="C:/Users/Rohana/OneDrive/Desktop/unix/Images/whereis.jpg" alt="ls command output" class="example-image"></li>
      <li><strong>type:</strong> Identifies built-in or external commands.<br>Example: <code>type ls</code><br><img src="C:/Users/Rohana/OneDrive/Desktop/unix/Images/type.jpg" alt="ls command output" class="example-image"></li>
      <li><strong>locate:</strong> Searches files quickly via an index.<br>Example: <code>locate ls</code><br><img src="C:/Users/Rohana/OneDrive/Desktop/unix/Images/locate.jpg" alt="ls command output" class="example-image"></li>
      <li><strong>find:</strong> Searches files and directories recursively.<br>Example: <code>find /usr/bin -name "ls"</code><br><img src="C:/Users/Rohana/OneDrive/Desktop/unix/Images/find.jpg" alt="ls command output" class="example-image"></li>
    </ul>
  `,
  3: `
    <h3>Path and Directory Handling</h3>
    <ul>
      <li><strong>Path Navigation:</strong>
        <ul>
          <li><code>ls</code>: Lists files in a path.<br><img src="C:/Users/Rohana/OneDrive/Desktop/unix/Images/ls.jpg" alt="ls command output" class="example-image"></li>
          <li><code>ls</code>: Lists files in a path.<br><img src="C:/Users/Rohana/OneDrive/Desktop/unix/Images/ls 2.jpg" alt="ls command output" class="example-image"></li>
          <li><code>cd</code>: Changes current directory.<br><img src="C:/Users/Rohana/OneDrive/Desktop/unix/Images/cd.jpg" alt="ls command output" class="example-image"></li>
          <li><code>pwd</code>: Prints the current working directory.<br><img src="C:/Users/Rohana/OneDrive/Desktop/unix/Images/pwd.jpg" alt="ls command output" class="example-image"></li>
        </ul>
      </li>
      <li><strong>Directory Management:</strong>
        <ul>
          <li><code>mkdir</code>: Creates directories.<br><img src="C:/Users/Rohana/OneDrive/Desktop/unix/Images/mkdir.jpg" alt="ls command output" class="example-image"></li>
          <li><code>rmdir</code>: Removes empty directories.<br><img src="C:/Users/Rohana/OneDrive/Desktop/unix/Images/rmdir2.jpg" alt="ls command output" class="example-image"><br><img src="C:/Users/Rohana/OneDrive/Desktop/unix/Images/rmdir.jpg" alt="ls command output" class="example-image"></li>
        </ul>
      </li>
    </ul>
  `,
  4: `
    <h3>Locating Files</h3>
    <ul>
      <li><code>ls</code>: Lists files.<br><img src="C:/Users/Rohana/OneDrive/Desktop/unix/Images/ls.jpg" alt="ls command output" class="example-image"></li>
      <li><code>find</code>: Searches files and directories.<br><img src="C:/Users/Rohana/OneDrive/Desktop/unix/Images/locating.jpg" alt="ls command output" class="example-image"></li>
    </ul>
  `
};

// Function to show description
function showDescription(buttonId) {
  const descriptions = document.querySelectorAll(".description-box");
  const buttons = document.querySelectorAll(".button-container button");

  descriptions.forEach((desc) => {
    desc.style.display = "none";
  });

  buttons.forEach((button) => {
    button.classList.remove("active");
    button.style.position = "static";
  });

  const descElement = document.getElementById(`desc${buttonId}`);
  descElement.innerHTML = data[buttonId];
  descElement.style.display = "block";

  const button = document.querySelector(button[`data-id="${buttonId}"`]);
  button.classList.add("active");
  button.style.position = "absolute";
  button.style.left = "10px";
}