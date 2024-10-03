import '../view/css/downloads.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileArrowDown } from '@fortawesome/free-solid-svg-icons';

function DownloadFiles(url: string) {
  window.open(url, '_blank');
}
export function Downloads() {
  const urls = [
    { link: '/download/system.rar' },
    { link: 'patch_full' },
    { link: 'client_and_patch' },
  ];
  return (
    <>
      <div id="downloads-box">
        <div id="download-files">
          <h2>System</h2>
          <FontAwesomeIcon
            onClick={() => DownloadFiles(urls[0].link)}
            icon={faFileArrowDown}
            className="download-icon"
          />
        </div>
        <div id="download-files">
          <h2>Patch Completo</h2>
          <FontAwesomeIcon
            onClick={() => DownloadFiles(urls[1].link)}
            icon={faFileArrowDown}
            className="download-icon"
          />
        </div>
        <div id="download-files">
          <h2>Client Files + Patch Completo</h2>
          <FontAwesomeIcon
            onClick={() => DownloadFiles(urls[2].link)}
            icon={faFileArrowDown}
            className="download-icon"
          />
        </div>
      </div>
    </>
  );
}
