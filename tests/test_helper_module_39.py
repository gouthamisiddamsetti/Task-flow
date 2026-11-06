import pytest
from utils.helper_module_39 import process_data_39

def test_process_data_39():
    assert process_data_39({"key": "value", "none_val": None}) == {"key": "value"}
    assert process_data_39(None) == {}
