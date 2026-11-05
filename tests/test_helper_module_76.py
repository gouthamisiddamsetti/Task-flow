import pytest
from utils.helper_module_76 import process_data_76

def test_process_data_76():
    assert process_data_76({"key": "value", "none_val": None}) == {"key": "value"}
    assert process_data_76(None) == {}
