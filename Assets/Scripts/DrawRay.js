var hit : RaycastHit;

function Update () {
    for (var i = 0; i < Input.touchCount; ++i) {
        if (Input.GetTouch(i).phase == TouchPhase.Began) {
            // Construct a ray from the current touch coordinates
            var ray = Camera.main.ScreenPointToRay (Input.GetTouch(i).position);
            if (Physics.Raycast (ray, hit)) {
                  hit.collider.SendMessage("Activate", SendMessageOptions.DontRequireReceiver);
            }
        }
    }
}


